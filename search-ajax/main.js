
let search = document.getElementById('search');
if (search) {
    let input = search.querySelector('input');
    let searchContent = search.querySelector('ul');
    let noContentText = searchContent.querySelector('span').innerHTML;

    input.onkeydown = inputTypeHandler;

    let timeout;
    function inputTypeHandler(e) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            if (e.target.value) {
                searchFor(e.target.value).then(showSearchResult)
            } else {
                noResult(noContentText);
            }
        }, 500);
    }
    async function searchFor(text) {
        let result;
        $.ajax({
            method: 'post',
            url: 'http://localhost:3000/search/',
            async: false,
            contentType: 'application/json',
            data: JSON.stringify({ text: text }),
            success: res => {
                result = res;
            }
        })
        return result
    }
    function showSearchResult(object) {
        if (object.length <= 1) return noResult();
        let fragment = document.createDocumentFragment();

        object.forEach(item => {
            let a = document.createElement('a');
            a.href = item.href;
            a.innerHTML = `نتیجه در دسته <span>${item.category}</span>`;
            a.dataset.count = item.count;

            fragment.appendChild(a);
        })

        searchContent.replaceChildren(fragment);
    }
    function noResult(text = 'نتیجه ای یافت نشد! :/') {
        let span = document.createElement('span');
        span.innerText = text;
        searchContent.replaceChildren(span);
    }
}