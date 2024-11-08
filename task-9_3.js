    document.addEventListener('DOMContentLoaded', loadBookmarks);

    function loadBookmarks() {
        const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
        bookmarks.forEach(bookmark => renderBookmark(bookmark.name, bookmark.url));
    }

    function saveBookmarks() {
        const bookmarks = Array.from(document.querySelectorAll('#bookmarkList li')).map(li => ({
            name: li.querySelector('.bookmark').innerText,
            url: li.querySelector('a').href
        }));
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }

    function renderBookmark(name, url) {
        const li = document.createElement('li');
        
        const span = document.createElement('span');
        span.classList.add('bookmark');
        span.innerText = name;

        const link = document.createElement('a');
        link.href = url;
        link.target = "_blank";
        link.innerText = 'Перейти';

        const editBtn = document.createElement('span');
        editBtn.classList.add('edit');
        editBtn.innerText = 'Редагувати';
        editBtn.onclick = () => editBookmark(li, name, url);

        const deleteBtn = document.createElement('span');
        deleteBtn.classList.add('delete');
        deleteBtn.innerText = 'Видалити';
        deleteBtn.onclick = () => deleteBookmark(li);

        li.appendChild(span);
        li.appendChild(link);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        document.getElementById('bookmarkList').appendChild(li);
    }

    function addBookmark() {
        const name = document.getElementById('bookmarkName').value.trim();
        const url = document.getElementById('bookmarkUrl').value.trim();

        if (name && url) {
            renderBookmark(name, url);
            saveBookmarks();
            document.getElementById('bookmarkName').value = '';
            document.getElementById('bookmarkUrl').value = '';
        }
    }

    function editBookmark(li, currentName, currentUrl) {
        const newName = prompt('Редагувати назву закладки:', currentName);
        const newUrl = prompt('Редагувати URL закладки:', currentUrl);

        if (newName && newUrl) {
            li.querySelector('.bookmark').innerText = newName;
            li.querySelector('a').href = newUrl;
            li.querySelector('a').innerText = 'Перейти';
            saveBookmarks();
        }
    }

    function deleteBookmark(li) {
        li.remove();
        saveBookmarks();
    }