export function contact() {
  const container = document.getElementById('content').appendChild(document.createElement('div'))
  container.classList.add('nav-content', 'contact')
  const wrapper = container.appendChild(document.createElement('section'))
  wrapper.classList.add('text-white', 'flex', 'flex-col', 'justify-center', 'items-center', 'bg-semi-dark', 'max-w-2xl', 'mx-auto', 'py-16')
  const firstTitle = wrapper.appendChild(document.createElement('h2'))
  firstTitle.classList.add('text-4xl', 'pb-8')
  firstTitle.innerHTML = "Contact Us"
  createContactInformation(wrapper, 'Address', '37 Champs-Élysées, Paris')
  createContactInformation(wrapper, 'Phone', '+33 1 48 24 55 69')
  createContactInformation(wrapper, 'Email', 'info@lepoes.com')
  const secondTitle = wrapper.appendChild(document.createElement('h3'))
  secondTitle.classList.add('text-3xl', 'sm:text-4xl', 'pb-4', 'pt-16')
  secondTitle.innerHTML = 'Have A Question?'
  const contactForm = wrapper.appendChild(document.createElement('div'))
  contactForm.classList.add('flex', 'flex-col')
  createContactField(contactForm, 'Full Name', 'input', 'text')
  createContactField(contactForm, 'Email', 'input', 'email')
  createContactField(contactForm, 'Phone', 'input', 'tel')
  createContactField(contactForm, 'Subject', 'input', 'text')
  createContactField(contactForm, 'Message', 'textarea')
  const submitButton = contactForm.appendChild(document.createElement('button'))
  submitButton.classList.add('bg-white', 'text-black', 'my-4', 'px-2', 'py-1', 'mx-auto')
  submitButton.innerHTML = 'Submit'
}

function createContactInformation(container, type, detail) {
  const contactType = container.appendChild(document.createElement('p'))
  contactType.classList.add('py-2')
  contactType.innerHTML = `${type}: `
  const contactDetail = contactType.appendChild(document.createElement('span'))
  contactDetail.classList.add('italic')
  contactDetail.innerHTML = detail
}

function createContactField(container, label, inputField, type) {
  const wrapper = container.appendChild(document.createElement('div'))
  wrapper.classList.add('py-4')
  const wrapperLabel = wrapper.appendChild(document.createElement('label'))
  wrapperLabel.classList.add('block', 'text-center')
  wrapperLabel.innerHTML = label
  const wrapperInput = wrapper.appendChild(document.createElement(inputField))
  wrapperInput.classList.add('bg-transparent', 'border-b', 'border-white', 'w-80')
  if (inputField === 'input') {
    wrapperInput.type = type
  }
  else if (inputField === 'textarea') {
    wrapperInput.classList.add('h-40');
    wrapperInput.setAttribute('data-gramm_editor', false)
  }
  return wrapperInput
}