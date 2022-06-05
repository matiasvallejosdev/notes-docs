function download(text, name, type)
    {
        var file = new Blob([text], {type: type});
        var isIE = /*@cc_on!@*/false || !!document.documentMode;
        if (isIE)
        {
            window.navigator.msSaveOrOpenBlob(file, name);
        }
        else
        {
            var a = document.createElement('a');
            a.href = URL.createObjectURL(file);
            a.download = name;
            a.click();
        }
     }
