import Book from "./components/Book"

const App = () => {
  const books = [
    {
      id: 1,
      image: "https://www.knihydobrovsky.cz/thumbs/book-list/mod_eshop/produkty/h/harry-potter-a-kamen-mudrcu-9788000061917.jpg.webp",
      title: "Harry Potter a Kámen mudrců"
    },
    {
      id: 2,
      image: "https://www.knihydobrovsky.cz/thumbs/book-list/mod_eshop/produkty/333420609/10.jpg.webp",
      title: "Harry Potter a Tajemná komnata"
    },
    {
      id: 3,
      image: "https://www.knihydobrovsky.cz/thumbs/book-list/mod_eshop/produkty/h/harry-potter-a-vezen-z-azkabanu-9788000063393.jpg.webp",
      title: "Harry Potter a Vězeň z Azkabanu"
    },
    {
      id: 4,
      image: "https://www.knihydobrovsky.cz/thumbs/book-detail-fancy-box/mod_eshop/produkty/h/harry-potter-a-ohnivy-pohar-9788000061931_12.jpg",
      title: "Harry Potter a Ohnivý pohár"
    },
    {
      id: 5,
      image: "https://www.knihydobrovsky.cz/thumbs/book-detail-fancy-box/mod_eshop/produkty/h/harry-potter-a-fenixuv-rad-9788000049687.jpg",
      title: "Harry Potter a Fénixův řád"
    },
    {
      id: 6,
      image: "https://www.knihydobrovsky.cz/thumbs/book-detail-fancy-box/mod_eshop/produkty/h/harry-potter-a-princ-dvoji-krve-9788000030678_2.jpg",
      title: "Harry Potter a princ dvojí krve"
    },
  ]

  return(
    <div className="all-books">
      <Book myimage={books[0].image} mytitle={books[0].title} />
      <Book myimage={books[1].image} mytitle={books[1].title} />
      <Book myimage={books[2].image} mytitle={books[2].title} />
      <Book myimage={books[3].image} mytitle={books[3].title} />
      <Book myimage={books[4].image} mytitle={books[4].title} />
      <Book myimage={books[5].image} mytitle={books[5].title} />
    </div>
  )
}  

export default App