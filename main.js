const displayMode = document.getElementById('display-mode');
const mode = document.getElementById('mode');
const photo = document.getElementById('photo');
const bodyId = document.getElementById('index')

const changeTheme = () => {
    //console.log('Inside changeTheme()')
    if(localStorage.getItem('theme') === 'basic'){
        mode.href = 'basic.css';//'./enlightenment.css';
        if(bodyId === 'index') photo.src = './images/ich_balmkirchli_adjusted.jpg';
        displayMode.title = 'Wechseln zu Dark Theme';
        displayMode.innerHTML = 'light_mode';
    } else if(localStorage.getItem('theme') === 'dark'){
        mode.href = './dark.css';
        if(bodyId === 'index') photo.src = './images/balmkirchli_adjusted.jpg';
        displayMode.title = 'Wechseln zu Basic Theme';
        displayMode.innerHTML = 'dark_mode'; 
    } else {
        localStorage.setItem('theme', 'basic');
        mode.href = './basic.css';
        if(bodyId === 'index') photo.src = './images/ich_balmkirchli_adjusted.jpg';
        displayMode.title = 'Wechseln zu Dark Theme';
        displayMode.innerHTML = 'light_mode';
    }
}

changeTheme();

displayMode.addEventListener('click', () => {
    if(localStorage.getItem('theme') === 'basic'){
        localStorage.setItem('theme', 'dark');
        mode.href = './dark.css';
        if(bodyId === 'index') photo.src = './images/balmkirchli_adjusted.jpg';
        displayMode.title = 'Wechseln zu Basic Theme';
        displayMode.innerHTML = 'dark_mode'; 
    } else if(localStorage.getItem('theme') === 'dark'){
        localStorage.setItem('theme', 'basic');
        mode.href = './basic.css';
        if(bodyId === 'index') photo.src = './images/ich_balmkirchli_adjusted.jpg';
        displayMode.title = 'Wechseln zu Dark Theme';
        displayMode.innerHTML = 'light_mode';
    } else {
        localStorage.setItem('theme', 'basic');
        mode.href = './basic.css';
        if(bodyId === 'index') photo.src = './images/ich_balmkirchli_adjusted.jpg';
        displayMode.title = 'Wechseln zu Dark Theme';
        displayMode.innerHTML = 'light_mode';
    }
});
