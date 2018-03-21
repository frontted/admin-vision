$(() => { $('[data-toggle="tooltip"]').tooltip({ container: 'body' }) });
$(() => { $('[data-toggle="popover"]').popover() });

$('.nav-dropdown ul a.nav-link').click(function (e) {
  e.stopPropagation();
  $(this).tab('show');
});