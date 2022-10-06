function tabs(nav, item, wrapper) {
  $(`ul.${nav}`).on('click', `li:not(.${item})`, function () {
    $(this)
      .addClass(`${item}`)
      .siblings()
      .removeClass(`${item}`)
      .closest('div.container')
      .find(`div.${wrapper}`)
      .removeClass(`${wrapper}_active`)
      .eq($(this).index())
      .addClass(`${wrapper}_active`);
  });
}

export default tabs;
