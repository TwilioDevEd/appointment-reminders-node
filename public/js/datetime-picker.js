$(document).ready(function() {
    $('#inputDate').datetimepicker({
        sideBySide: true,
        format: 'MM-DD-YYYY hh:mma',
    });
    $('#selectTimeZone').chosen();
});
