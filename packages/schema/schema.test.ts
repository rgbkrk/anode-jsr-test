import {
  assertEquals,
  assertExists,
} from "https://deno.land/std@0.208.0/assert/mod.ts";
import { events, materializers, schema, tables } from "./schema.ts";

Deno.test("schema exports", () => {
  assertExists(tables);
  assertExists(events);
  assertExists(materializers);
  assertExists(schema);
});

Deno.test("tables structure", () => {
  const expectedTables = [
    "notebook",
    "cells",
    "outputs",
    "kernelSessions",
    "executionQueue",
    "dataConnections",
    "uiState",
  ];

  for (const tableName of expectedTables) {
    assertExists(
      (tables as Record<string, unknown>)[tableName],
      `Table ${tableName} should exist`,
    );
  }
});

Deno.test("events structure", () => {
  const expectedEvents = [
    "notebookInitialized",
    "notebookTitleChanged",
    "cellCreated",
    "cellSourceChanged",
    "cellTypeChanged",
    "cellDeleted",
    "cellMoved",
    "kernelSessionStarted",
    "executionRequested",
    "cellOutputAdded",
  ];

  for (const eventName of expectedEvents) {
    assertExists(
      (events as Record<string, unknown>)[eventName],
      `Event ${eventName} should exist`,
    );
  }
});

Deno.test("materializers structure", () => {
  assertExists(materializers);

  // Check that materializers is a Map or object with entries
  const materializerKeys = Object.keys(materializers);
  assertEquals(materializerKeys.length > 0, true, "Should have materializers");
});

Deno.test("schema structure", () => {
  assertExists(schema);
  assertExists(schema.state);
  assertExists(schema.eventsDefsMap);
});

Deno.test("table columns", () => {
  // Test notebook table columns
  const notebookColumns = Object.keys(tables.notebook.sqliteDef.columns);
  assertEquals(notebookColumns.includes("id"), true);
  assertEquals(notebookColumns.includes("title"), true);
  assertEquals(notebookColumns.includes("ownerId"), true);

  // Test cells table columns
  const cellsColumns = Object.keys(tables.cells.sqliteDef.columns);
  assertEquals(cellsColumns.includes("id"), true);
  assertEquals(cellsColumns.includes("cellType"), true);
  assertEquals(cellsColumns.includes("source"), true);
  assertEquals(cellsColumns.includes("position"), true);
});

Deno.test("event count", () => {
  const eventCount = Object.keys(events).length;
  assertEquals(eventCount >= 20, true, "Should have at least 20 events");
});
