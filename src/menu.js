let menuItems = [
  { title: 'Soupe à l’oignon', description: 'A traditional French soup made of caramelized onions and beef stock, served with savory croutons and melted cheese on a toasted, crispy baguette slice.', price: '20€', image: './assets/images/soup.png'},
  { title: 'Poulet Basquaise', description: 'A classic French Basque dish. Chicken is slowly pot roasted in a pepper sauce called piperade, made from melted red and green peppers, shallots, garlic and tomatoes. Served with either sauté potatoes or boiled rice.', price: '40€', image: './assets/images/butter-chicken.png'},
  { title: 'Le Bifteck', description: 'A French beef cut. This steak is beautifully marbled and balanced between the fat and meat ratio. Sauces include pepper sauce, cheese sauce, borderlaise sauce or plain. Available in 300g, 500g, and 1kg.', price: '40€/60€/85€', image: './assets/images/steak.png'},
  { title: 'Homard Thermidor', description: 'Tender lobster meat cooked the right way. The lobster is served with linguine, smothered in a rich buttery, white sauce. Available in 300g, 500g, and 1kg servings.', price: '50€/65€/100€', image: './assets/images/lobster.png'}
]

export function menu() {
  const container = document.getElementById('content').appendChild(document.createElement('main'))
  container.classList.add('nav-content', 'menu', 'px-8', 'sm:px-16', 'py-16', 'w-full')
  const menuWrapper = container.appendChild(document.createElement('div'))
  menuWrapper.classList.add('max-w-3xl', 'mx-auto')
  createMenuItems(menuWrapper, menuItems)
}

function createMenuItems(container, menu) {
  menu.forEach(menuItem => {
    const row = container.appendChild(document.createElement('section'))
    row.classList.add('menu-item', 'grid', 'grid-cols-1', 'text-center', 'sm:text-left', 'sm:grid-cols-2', 'items-center', 'pb-20')
    const menuTextWrapper = row.appendChild(document.createElement('div'))
    menuTextWrapper.classList.add('menu-text', 'mb-8', 'sm:mb-0', 'text-white', 'flex', 'flex-col', 'justify-center')
    const title = menuTextWrapper.appendChild(document.createElement('h4'))
    title.classList.add('text-3xl', 'lg:text-4xl', 'font-bold', 'mb-8')
    title.innerHTML = `${menuItem.title}`
    const description = menuTextWrapper.appendChild(document.createElement('p'))
    description.classList.add('text-left')
    description.innerHTML = `${menuItem.description}`
    const price = menuTextWrapper.appendChild(document.createElement('p'))
    price.classList.add('font-bold', 'text-lg', 'text-gray-200', 'mt-8')
    price.innerHTML = `Price: ${menuItem.price}`
    const imgContainer = row.appendChild(document.createElement('div'))
    imgContainer.classList.add('menu-picture', 'flex', 'justify-center')
    const img = imgContainer.appendChild(document.createElement('img'))
    img.classList.add('w-60', 'h-full')
    img.src = `${menuItem.image}`
  })
  // for (let i = 0; i < 4; i++) {
  //   const menuItem = container.appendChild(document.createElement('div'))
  //   menuItem.classList.add('menu', 'grid', 'grid-cols-2', 'items-center', 'px-60', 'pb-20')
  //   const menuText = menuItem.appendChild(document.createElement('div'))
  //   menuText.classList.add('menu-text', 'text-white', 'flex', 'flex-col', 'justify-center')
  // }
}