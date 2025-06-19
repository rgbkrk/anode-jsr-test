#!/usr/bin/env -S deno run --allow-read --allow-write

import { events, materializers, schema, tables } from "@anode/schema";

console.log("🚀 Anode Schema CLI");
console.log("===================\n");

console.log("📊 Schema Structure:");
console.log("-------------------");
console.log("Schema:", schema);
console.log();

console.log("🗂️  Tables:");
console.log("----------");
console.log("Available tables:", Object.keys(tables));
console.log();
for (const [tableName, table] of Object.entries(tables)) {
  console.log(`📋 ${tableName}:`);
  if (
    table && typeof table === "object" && "sqliteDef" in table &&
    table.sqliteDef.columns
  ) {
    console.log(`   Columns:`, Object.keys(table.sqliteDef.columns));
  } else {
    console.log(`   Columns: [Unable to read table structure]`);
  }
  console.log();
}

console.log("⚡ Events:");
console.log("----------");
console.log("Available events:", Object.keys(events));
console.log();

console.log("🔄 Materializers:");
console.log("------------------");
console.log("Available materializers:", Object.keys(materializers));
console.log();

console.log("📝 Schema Summary:");
console.log("------------------");
console.log("Schema type:", typeof schema);
console.log("Has LiveStore symbol:", "LiveStoreSchemaSymbol" in schema);
console.log("State tables count:", schema.state?.sqlite?.tables?.size || 0);
console.log("Events count:", schema.eventsDefsMap?.size || 0);
console.log("Materializers count:", schema.state?.materializers?.size || 0);
