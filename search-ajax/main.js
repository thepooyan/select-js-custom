
let search = document.getElementById('search');
if (search) {
    let input = search.querySelector('input');
    let searchContent = search.querySelector('ul');

    input.onkeyup = inputTypeHandler;

    let timeout;
    function inputTypeHandler(e) {
        clearTimeout(timeout);
        if (e.target.value.length > 1) {
            timeout = setTimeout(() => {
                searchFor(e.target.value).then(showSearchResult)
            }, 500);
        } 
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
        result.text = text;
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
            a.dataset.search = object.text;

            fragment.appendChild(a);
        })

        addOrReplaceChildern(searchContent, fragment)
    }
    function noResult() {
        let span = document.createElement('span');
        span.innerText = 'متاسفانه نتیجه ای یافت نشد! :/';
        searchContent.replaceChildren(span);
    }
    function addOrReplaceChildern(element, child) {
        if (element.childElementCount > 0) element.replaceChildren(child)
        else element.appendChild(child)
    }
}