var $ = window.parent.jQuery;

const tableData = document.getElementById('dataBody');

// Function to populate the table with object data
function populateTable() {
  let html = '';
  for (const topic of data.topics) {
    html += '<tr>';
    html += `<td class="column">${topic.id}</td>`;
    html += `<td class="column">${topic.name}</td>`;
    html += `<td class="column">${topic.description}</td>`;
    html += '<td><ul>'
    
    for (let i = 0; i < 5 && i < topic.programs.length; i++) {
      html += `<li>${topic.programs[i].title}</li>`;
    }

    html += '</ul></td>'
    html += '</tr>';

  }
  tableData.innerHTML = html;
}

populateTable();

// Function to search the table by keyword
function searchTable() {
  const input = document.getElementById('searchInput').value;
  $('#dataBody tr').addClass("d-none");
  var x = $('#dataBody .column').filter(function () {
    const regex = new RegExp(input, 'gi');
    let text = $(this).text();
    let filterElements = text.toUpperCase().includes(input.toUpperCase());
    if(input.length > 0 && filterElements) {
      text = text.replace(/(<mark class="search-highlight">|<\/mark>)/gim, '');
      const newText = text.replace(regex, '<mark class="search-highlight">$&</mark>');
      $(this).html(newText);
    } else {
      if(text.length > 0) {
        const newHeading = $(this).html().replace(/(<mark class="search-highlight">|<\/mark>)/gim, '');
        $(this).html(newHeading);
      }
    }
    return filterElements;
  })
  x.closest('tr').removeClass('d-none');
}