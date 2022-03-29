//objeto redes sociais
const LinksSocialMedia = {
  facebook: 'people/Glayston-Ferreira/100017961643427/?_rdr',
  twitter: 'glayston23',
  instagram: 'gamorim23',
  github: 'amorim23'
}
//subistituindo dados a partir do objeto
function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()


//utilizando dados (API) do guit
function getChengeGuitHub()
{
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      useLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
    
}
getChengeGuitHub()