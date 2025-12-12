/**
 * JSON to TypeScript
 * Generate TypeScript interfaces from JSON
 *
 * Online tool: https://devtools.at/tools/json-to-typescript
 *
 * @packageDocumentation
 */

function detectType(value: JsonValue): string {
  if (value === null) return "null";
  if (Array.isArray(value)) {
    if (value.length === 0) return "any[]";
    const firstType = detectType(value[0]);
    const allSameType = value.every(item => detectType(item) === firstType);
    if (allSameType && firstType !== "object") {
      return `${firstType}[]`;
    }
    if (allSameType && firstType === "object") {
      return "object[]";
    }
    return "any[]";
  }
  if (typeof value === "object") return "object";
  return typeof value;
}

function capitalizeFirst(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function toCamelCase(str: string): string {
  return str.replace(/[-_\s]+(.)?/g, (_, c) => c ? c.toUpperCase() : '');
}

function toPascalCase(str: string): string {
  const camel = toCamelCase(str);
  return capitalizeFirst(camel);
}

function generateInterfaceName(key: string, parentName: string = "Root"): string {
  if (!key) return parentName;
  const cleaned = key.replace(/[^a-zA-Z0-9_]/g, '');
  return toPascalCase(cleaned) || parentName;
}

function generateInterfaces(
  data: JsonValue,

// Export for convenience
export default { encode, decode };
