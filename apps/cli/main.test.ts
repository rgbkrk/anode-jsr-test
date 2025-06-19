import {
  assertEquals,
  assertExists,
} from "https://deno.land/std@0.208.0/assert/mod.ts";
import { events, materializers, schema, tables } from "@anode/schema";

Deno.test("CLI imports schema correctly", () => {
  assertExists(tables);
  assertExists(events);
  assertExists(materializers);
  assertExists(schema);
});

Deno.test("CLI can access table structure", () => {
  const tableNames = Object.keys(tables);
  assertEquals(tableNames.length >= 7, true, "Should have at least 7 tables");

  // Check that we can access table columns
  for (const [tableName, table] of Object.entries(tables)) {
    if (
      table && typeof table === "object" && "sqliteDef" in table &&
      table.sqliteDef.columns
    ) {
      const columns = Object.keys(table.sqliteDef.columns);
      assertEquals(
        columns.length > 0,
        true,
        `Table ${tableName} should have columns`,
      );
    }
  }
});

Deno.test("CLI can access events", () => {
  const eventNames = Object.keys(events);
  assertEquals(eventNames.length >= 20, true, "Should have at least 20 events");
});

Deno.test("CLI can access materializers", () => {
  const materializerNames = Object.keys(materializers);
  assertEquals(
    materializerNames.length >= 20,
    true,
    "Should have at least 20 materializers",
  );
});

Deno.test("CLI schema has required properties", () => {
  assertExists(schema.state);
  assertExists(schema.eventsDefsMap);
  assertEquals(typeof schema.state.sqlite.tables.size, "number");
  assertEquals(typeof schema.eventsDefsMap.size, "number");
});
