'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const table = document.querySelector('.field');

function updateButtonsState() {
  const rowsCount = table.rows.length;
  const columnsCount = rowsCount > 0 ? table.rows[0].cells.length : 0;

  appendRow.disabled = rowsCount >= 10;
  removeRow.disabled = rowsCount <= 2 || rowsCount === 0;
  appendColumn.disabled = columnsCount >= 10 || rowsCount === 0;
  removeColumn.disabled = columnsCount <= 2 || rowsCount === 0;
}

appendRow.addEventListener('click', () => {
  if (table.rows.length < 10) {
    const columnCount = (table.rows.length && table.rows[0].cells.length) || 0;
    const newRow = table.insertRow();

    for (let i = 0; i < columnCount; i++) {
      newRow.insertCell();
    }
  }

  updateButtonsState();
});

removeRow.addEventListener('click', () => {
  if (table.rows.length > 2) {
    table.deleteRow(table.rows.length - 1);
  }

  updateButtonsState();
});

appendColumn.addEventListener('click', () => {
  if (table.rows.length === 0) {
    return;
  }

  const columnsCount = table.rows[0].cells.length;

  if (columnsCount < 10) {
    for (const row of table.rows) {
      row.insertCell();
    }
  }

  updateButtonsState();
});

removeColumn.addEventListener('click', () => {
  if (table.rows.length === 0) {
    return;
  }

  const columnsCount = table.rows[0].cells.length;

  if (columnsCount > 2) {
    for (const row of table.rows) {
      row.deleteCell(row.cells.length - 1);
    }
  }

  updateButtonsState();
});

updateButtonsState();
