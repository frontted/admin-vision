$(() => { $('[data-toggle="tooltip"]').tooltip({ container: 'body' }) });
$(() => { $('[data-toggle="popover"]').popover() });

$('.dropdown.notifications ul a.nav-link').click(function (e) {
  e.stopPropagation();
  $(this).tab('show');
});