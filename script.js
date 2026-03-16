// Load data từ JSON file
async function loadProfileData() {
    try {
        const response = await fetch('data.json');
        const data = await response.json();
        renderProfile(data);
    } catch (error) {
        console.error('Error loading profile data:', error);
    }
}

// Render thông tin cá nhân
function renderProfile(data) {
    // Render header
    renderHeader(data.profile);
    
    // Render thông tin cơ bản
    renderBasicInfo(data.basicInfo);
    
    // Render giới thiệu
    renderIntroduction(data.introduction);
    
    // Render kỹ năng
    renderSkills(data.skills);
    
    // Render liên kết xã hội
    renderSocialLinks(data.socialLinks);
    
    // Render footer
    renderFooter(data.footer);
}

// Render header
function renderHeader(profile) {
    const header = document.querySelector('.header');
    const avatar = document.querySelector('.avatar');
    const h1 = document.querySelector('.header h1');
    const p = document.querySelector('.header p');
    
    // Nếu không có ảnh, set alt text mặc định
    if (!avatar.src || avatar.src === window.location.href) {
        avatar.alt = profile.avatar;
    }
    h1.textContent = profile.fullName;
    p.textContent = profile.title;
}

// Render thông tin cơ bản
function renderBasicInfo(basicInfo) {
    const infoGrid = document.querySelector('.info-grid');
    infoGrid.innerHTML = '';
    
    const infoItems = [
        { label: 'Họ và Tên', value: basicInfo.hoVaTen },
        { label: 'Mã Số Sinh Viên', value: basicInfo.maSoSinhVien },
        { label: 'Lớp', value: basicInfo.lop },
        { label: 'Email', value: basicInfo.email }
    ];
    
    infoItems.forEach(item => {
        const infoItem = document.createElement('div');
        infoItem.className = 'info-item';
        infoItem.innerHTML = `
            <div class="info-label">${item.label}</div>
            <div class="info-value">${item.value}</div>
        `;
        infoGrid.appendChild(infoItem);
    });
}

// Render giới thiệu
function renderIntroduction(introduction) {
    const introductionDiv = document.querySelector('.introduction');
    introductionDiv.innerHTML = `<p>${introduction}</p>`;
}

// Render kỹ năng
function renderSkills(skills) {
    const skillsContainer = document.querySelector('.skills-container');
    skillsContainer.innerHTML = '';
    
    skills.forEach(skill => {
        const skillTag = document.createElement('div');
        skillTag.className = 'skill-tag';
        skillTag.textContent = skill;
        skillsContainer.appendChild(skillTag);
    });
}

// Render liên kết xã hội
function renderSocialLinks(socialLinks) {
    const socialLinksDiv = document.querySelector('.social-links');
    socialLinksDiv.innerHTML = '';
    
    socialLinks.forEach(link => {
        const anchor = document.createElement('a');
        // Thêm mailto: cho email links
        let url = link.url;
        if (link.name === 'Email' && !url.startsWith('mailto:')) {
            url = 'mailto:' + url;
        }
        anchor.href = url;
        anchor.className = 'social-link';
        anchor.title = link.name;
        anchor.textContent = link.icon;
        if (link.name !== 'Email') {
            anchor.target = '_blank';
            anchor.rel = 'noopener noreferrer';
        }
        socialLinksDiv.appendChild(anchor);
    });
}

// Render footer
function renderFooter(footer) {
    const footerDiv = document.querySelector('.footer');
    footerDiv.innerHTML = `<p>${footer.copyright}</p>`;
}

// Xử lý thay đổi avatar từ header
function setupAvatarUpload() {
    const avatarUploadInput = document.getElementById('avatar-upload');
    const avatarImg = document.getElementById('avatar-img');
    
    avatarUploadInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                avatarImg.src = event.target.result;
                localStorage.setItem('avatarImage', event.target.result);
            };
            reader.readAsDataURL(file);
        }
    });
    
    // Load avatar từ localStorage nếu có
    const savedAvatar = localStorage.getItem('avatarImage');
    if (savedAvatar) {
        avatarImg.src = savedAvatar;
    } else {
        // Hiển thị placeholder nếu chưa upload ảnh
        avatarImg.src = 'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect fill="%23f0f0f0" width="200" height="200"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="60" fill="%23999">👤</text></svg>';
    }
}

// Khởi tạo khi trang load
document.addEventListener('DOMContentLoaded', function() {
    loadProfileData();
    setupAvatarUpload();
});
