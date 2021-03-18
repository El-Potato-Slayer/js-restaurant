export function intro() {
  const container = document.getElementById('content').appendChild(document.createElement('div'))
  container.classList.add('nav-content', 'intro', 'reduced-screen-height', 'bg-dark', 'text-white')
  const section = container.appendChild(document.createElement('section'))
  section.classList.add('relative', 'reduced-screen-height', 'flex', 'flex-col', 'justify-center', 'items-center')
  const h1 = section.appendChild(document.createElement('h1'))
  h1.innerHTML = 'Le Poes'
  const h2 = section.appendChild(document.createElement('h2'))
  h2.innerHTML = 'A Taste Of France'
  const rosemary = section.appendChild(document.createElement('img'))
  rosemary.id = 'rosemary1'
  rosemary.src = './assets/images/rosemary.png'
  rosemary.classList.add('hidden', 'lg:inline')
  const tomatoes = section.appendChild(document.createElement('img'))
  tomatoes.id = 'tomatoes'
  tomatoes.src = './assets/images/tomatoes.png'
  tomatoes.classList.add('hidden', 'lg:inline')
  const onions = section.appendChild(document.createElement('img'))
  onions.id = 'onions'
  onions.src = './assets/images/onions.png'
  onions.classList.add('hidden', 'lg:inline')
  const garlic = section.appendChild(document.createElement('img'))
  garlic.id = 'garlic'
  garlic.src = './assets/images/garlic.png'
  garlic.classList.add('hidden', 'lg:inline')
  const dish = section.appendChild(document.createElement('img'))
  dish.id = 'dish'
  dish.src = './assets/images/dish.png'
  dish.classList.add('hidden', 'lg:inline')
}

export function cardSection() {
  const container = document.getElementsByClassName('nav-content')[0]
  const section = container.appendChild(document.createElement('div'))
  section.classList.add('bg-dark', 'px-8', 'sm:px-32', 'flex', 'xy-center', 'relative', 'card-text', 'py-16', 'sm:py-0')
  const card = section.appendChild(document.createElement('div'))
  card.classList.add('card', 'sm:h-80')
  const imgWrapper = card.appendChild(document.createElement('div'))
  imgWrapper.classList.add('hidden', 'lg:block')
  const img = imgWrapper.appendChild(document.createElement('img'))
  img.classList.add('w-full', 'h-full', 'object-cover')
  img.src = './assets/images/ratatouille.jpg'
  const cardTextContainer = card.appendChild(document.createElement('div'))
  cardTextContainer.classList.add('bg-white', 'text-black', 'px-8', 'sm:px-12', 'md:px-20', 'xl:px-32', 'py-8', 'flex', 'flex-col', 'justify-center', 'items-center')
  const cardTitle = cardTextContainer.appendChild(document.createElement('h3'))
  cardTitle.classList.add('text-4xl', 'mb-4', 'md:mb-8', 'font-bold')
  cardTitle.innerHTML = 'About Us'
  const cardText = cardTextContainer.appendChild(document.createElement('p'))
  cardText.innerHTML = 'Located in Champs-Élysées, Paris, we aim to provide the real French experience. Le Poes serves the most exquisite French cuisines. From our food, to the wine, and even to the wood we use to cook our food. All of our ingredients are locally sourced, and we inspect all of them to ensure they are of the highest of quality.'
  const thyme = section.appendChild(document.createElement('img'))
  thyme.id = 'thyme'
  thyme.src = './assets/images/thyme.png'
  thyme.classList.add('absolute', 'hidden', 'sm:inline')
}