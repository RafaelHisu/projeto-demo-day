import ProductItem from "./ProductItem"
import ScrollContainer from "react-indiana-drag-scroll"

export default function ProductList(props) {

  return (
    <div>
      <ScrollContainer className="product-list">
        {props.products.map(product => {
          return (
            <div key={product.id}>
              <ProductItem
                id={product.id}
                image={product.foto_produto}
                title={product.nome}
                description={product.descricao}
                price={product.preco} />
            </div>
          )
        })}
      </ScrollContainer>
    </div >
  )
}
