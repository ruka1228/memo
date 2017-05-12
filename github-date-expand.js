$('time').each(function(){
    var t = new Date($(this).attr('datetime'));
    var full = '';
    full += t.getFullYear() + '/';
    full += ('0' + (t.getMonth() + 1)).slice(-2) + '/';
    full += ('0' + t.getDate()).slice(-2) + ' ';
    full += ('0' + t.getHours()).slice(-2) + ':';
    full += ('0' + t.getMinutes()).slice(-2) + ':';
    full += ('0' + t.getSeconds()).slice(-2);
    $(this).text(full);
});
