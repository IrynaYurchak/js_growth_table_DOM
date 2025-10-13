'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const table = document.querySelector('.field');

function updateButtonsState() {
  const rowsCount = table.rows.length;
  const columnsCount = table.rows[0].cells.length;

  appendRow.disabled = rowsCount >= 10;
  removeRow.disabled = rowsCount <= 2;
  appendColumn.disabled = columnsCount >= 10;
  removeColumn.disabled = columnsCount <= 2;
}

appendRow.addEventListener('click', () => {
  if (table.rows.length === 0) {
    return;
  }

  if (table.rows.length < 10) {
    const columnCount = table.rows[0].cells.length;
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
  const columnsCount = table.rows[0].cells.length;

  if (columnsCount < 10) {
    for (const row of table.rows) {
      row.insertCell();
    }
  }

  updateButtonsState();
});

removeColumn.addEventListener('click', () => {
  const columnsCount = table.rows[0].cells.length;

  if (columnsCount > 2) {
    for (const row of table.rows) {
      row.deleteCell(table.cells.length - 1);
    }
  }

  updateButtonsState();
});

updateButtonsState();
