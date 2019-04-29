function addItem() {
  $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    let item = $(this).find('input[name="shopping-list-entry"]').val();
    $(this).find('input[name="shopping-list-entry"]').val("")
    $('.shopping-list').append(`
      <li>
        <span class="shopping-item">${item}</span>
        <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
          <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
          <span class="button-label">delete</span>
        </button>
        </div>
      </li>
    `)
  })
}

function checkItem() {
  $('ul').on('click','button.shopping-item-toggle',function(event) {
    $(this).parent().siblings('.shopping-item').toggleClass('shopping-item__checked');
  });
};

function deleteItem() {
  $('ul').on('click','button.shopping-item-delete',function(event) {
    $(this).closest('li').remove();
  })
};

$(addItem);
$(checkItem);
$(deleteItem);
