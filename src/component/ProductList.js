import React, { useState, Fragment } from 'react';
import ReactDOM from 'react-dom';

const productData = [
  {
    "productName": "Samsung Galaxy Note 20 Ultra 5G",
    "image": "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/300x/9df78eab33525d08d6e5fb8d27136e95/y/e/yellow_final_2.jpg",
    "specifications": {
      "screen": 6.9,
      "ram": 12,
      "rom": 256
    },
    "newPrice": 20490000,
    "oldPrice": 32990000
  },
  {
    "productName": "Samsung Galaxy Note 20 Ultra 5G",
    "image": "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/300x/9df78eab33525d08d6e5fb8d27136e95/y/e/yellow_final_2.jpg",
    "specifications": {
      "screen": 6.9,
      "ram": 12,
      "rom": 256
    },
    "newPrice": 20490005,
    "oldPrice": 32990000
  },
  {
    "productName": "Samsung Galaxy Note 20 Ultra 5G",
    "image": "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/300x/9df78eab33525d08d6e5fb8d27136e95/y/e/yellow_final_2.jpg",
    "specifications": {
      "screen": 6.9,
      "ram": 12,
      "rom": 256
    },
    "newPrice": 20490001,
    "oldPrice": 32990000
  },
  {
    "productName": "Samsung Galaxy Note 20 Ultra 5G",
    "image": "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/300x/9df78eab33525d08d6e5fb8d27136e95/y/e/yellow_final_2.jpg",
    "specifications": {
      "screen": 6.9,
      "ram": 12,
      "rom": 256
    },
    "newPrice": 20490009,
    "oldPrice": 32990000
  },
  {
    "productName": "Samsung Galaxy Note 20 Ultra 5G",
    "image": "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/300x/9df78eab33525d08d6e5fb8d27136e95/y/e/yellow_final_2.jpg",
    "specifications": {
      "screen": 6.9,
      "ram": 12,
      "rom": 256
    },
    "newPrice": 20490007,
    "oldPrice": 32990000
  },
  {
    "productName": "Samsung Galaxy Note 20 Ultra 5G",
    "image": "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/300x/9df78eab33525d08d6e5fb8d27136e95/y/e/yellow_final_2.jpg",
    "specifications": {
      "screen": 6.9,
      "ram": 12,
      "rom": 256
    },
    "newPrice": 20490014,
    "oldPrice": 32990000
  },
  {
    "productName": "Samsung Galaxy Note 20 Ultra 5G",
    "image": "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/300x/9df78eab33525d08d6e5fb8d27136e95/y/e/yellow_final_2.jpg",
    "specifications": {
      "screen": 6.9,
      "ram": 12,
      "rom": 256
    },
    "newPrice": 20490045,
    "oldPrice": 32990000
  },
  {
    "productName": "Samsung Galaxy Note 20 Ultra 5G",
    "image": "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/300x/9df78eab33525d08d6e5fb8d27136e95/y/e/yellow_final_2.jpg",
    "specifications": {
      "screen": 6.9,
      "ram": 12,
      "rom": 256
    },
    "newPrice": 20490000,
    "oldPrice": 32990000
  },

  {
    "productName": "Samsung Galaxy Note 20 Ultra 5G",
    "image": "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/300x/9df78eab33525d08d6e5fb8d27136e95/y/e/yellow_final_2.jpg",
    "specifications": {
      "screen": 6.9,
      "ram": 12,
      "rom": 256
    },
    "newPrice": 20490000,
    "oldPrice": 32990000
  },

  {
    "productName": "Samsung Galaxy Note 20 Ultra 5G",
    "image": "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/300x/9df78eab33525d08d6e5fb8d27136e95/y/e/yellow_final_2.jpg",
    "specifications": {
      "screen": 6.9,
      "ram": 12,
      "rom": 256
    },
    "newPrice": 20490000,
    "oldPrice": 32990000
  },

  {
    "productName": "Samsung Galaxy Note 20 Ultra 5G",
    "image": "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/300x/9df78eab33525d08d6e5fb8d27136e95/y/e/yellow_final_2.jpg",
    "specifications": {
      "screen": 6.9,
      "ram": 12,
      "rom": 256
    },
    "newPrice": 20490000,
    "oldPrice": 32990000
  },

  {
    "productName": "Samsung Galaxy Note 20 Ultra 5G",
    "image": "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/300x/9df78eab33525d08d6e5fb8d27136e95/y/e/yellow_final_2.jpg",
    "specifications": {
      "screen": 6.9,
      "ram": 12,
      "rom": 256
    },
    "newPrice": 20490000,
    "oldPrice": 32990000
  },

  {
    "productName": "Samsung Galaxy Note 20 Ultra 5G",
    "image": "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/300x/9df78eab33525d08d6e5fb8d27136e95/y/e/yellow_final_2.jpg",
    "specifications": {
      "screen": 6.9,
      "ram": 12,
      "rom": 256
    },
    "newPrice": 20490000,
    "oldPrice": 32990000
  },

  {
    "productName": "Samsung Galaxy Note 20 Ultra 5G",
    "image": "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/300x/9df78eab33525d08d6e5fb8d27136e95/y/e/yellow_final_2.jpg",
    "specifications": {
      "screen": 6.9,
      "ram": 12,
      "rom": 256
    },
    "newPrice": 20490000,
    "oldPrice": 32990000
  },

  {
    "productName": "Samsung Galaxy Note 20 Ultra 5G",
    "image": "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/300x/9df78eab33525d08d6e5fb8d27136e95/y/e/yellow_final_2.jpg",
    "specifications": {
      "screen": 6.9,
      "ram": 12,
      "rom": 256
    },
    "newPrice": 20490000,
    "oldPrice": 32990000
  },

  {
    "productName": "Samsung Galaxy Note 20 Ultra 5G",
    "image": "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/300x/9df78eab33525d08d6e5fb8d27136e95/y/e/yellow_final_2.jpg",
    "specifications": {
      "screen": 6.9,
      "ram": 12,
      "rom": 256
    },
    "newPrice": 20490000,
    "oldPrice": 32990000
  },

  {
    "productName": "Samsung Galaxy Note 20 Ultra 5G",
    "image": "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/300x/9df78eab33525d08d6e5fb8d27136e95/y/e/yellow_final_2.jpg",
    "specifications": {
      "screen": 6.9,
      "ram": 12,
      "rom": 256
    },
    "newPrice": 20490000,
    "oldPrice": 32990000
  },

  {
    "productName": "Samsung Galaxy Note 20 Ultra 5G",
    "image": "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/300x/9df78eab33525d08d6e5fb8d27136e95/y/e/yellow_final_2.jpg",
    "specifications": {
      "screen": 6.9,
      "ram": 12,
      "rom": 256
    },
    "newPrice": 20490000,
    "oldPrice": 32990000
  },

  {
    "productName": "Samsung Galaxy Note 20 Ultra 5G",
    "image": "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/300x/9df78eab33525d08d6e5fb8d27136e95/y/e/yellow_final_2.jpg",
    "specifications": {
      "screen": 6.9,
      "ram": 12,
      "rom": 256
    },
    "newPrice": 20490000,
    "oldPrice": 32990000
  },

  {
    "productName": "Samsung Galaxy Note 20 Ultra 5G",
    "image": "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/300x/9df78eab33525d08d6e5fb8d27136e95/y/e/yellow_final_2.jpg",
    "specifications": {
      "screen": 6.9,
      "ram": 12,
      "rom": 256
    },
    "newPrice": 20490000,
    "oldPrice": 32990000
  },

  {
    "productName": "Samsung Galaxy Note 20 Ultra 5G",
    "image": "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/300x/9df78eab33525d08d6e5fb8d27136e95/y/e/yellow_final_2.jpg",
    "specifications": {
      "screen": 6.9,
      "ram": 12,
      "rom": 256
    },
    "newPrice": 20490000,
    "oldPrice": 32990000
  },

  {
    "productName": "Samsung Galaxy Note 20 Ultra 5G",
    "image": "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/300x/9df78eab33525d08d6e5fb8d27136e95/y/e/yellow_final_2.jpg",
    "specifications": {
      "screen": 6.9,
      "ram": 12,
      "rom": 256
    },
    "newPrice": 20490000,
    "oldPrice": 32990000
  },

  {
    "productName": "Samsung Galaxy Note 20 Ultra 5G",
    "image": "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/300x/9df78eab33525d08d6e5fb8d27136e95/y/e/yellow_final_2.jpg",
    "specifications": {
      "screen": 6.9,
      "ram": 12,
      "rom": 256
    },
    "newPrice": 20490000,
    "oldPrice": 32990000
  },

  {
    "productName": "Samsung Galaxy Note 20 Ultra 5G",
    "image": "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/300x/9df78eab33525d08d6e5fb8d27136e95/y/e/yellow_final_2.jpg",
    "specifications": {
      "screen": 6.9,
      "ram": 12,
      "rom": 256
    },
    "newPrice": 20490000,
    "oldPrice": 32990000
  },

  {
    "productName": "Samsung Galaxy Note 20 Ultra 5G",
    "image": "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/300x/9df78eab33525d08d6e5fb8d27136e95/y/e/yellow_final_2.jpg",
    "specifications": {
      "screen": 6.9,
      "ram": 12,
      "rom": 256
    },
    "newPrice": 20490000,
    "oldPrice": 32990000
  },

  {
    "productName": "Samsung Galaxy Note 20 Ultra 5G",
    "image": "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/300x/9df78eab33525d08d6e5fb8d27136e95/y/e/yellow_final_2.jpg",
    "specifications": {
      "screen": 6.9,
      "ram": 12,
      "rom": 256
    },
    "newPrice": 20490000,
    "oldPrice": 32990000
  },

  {
    "productName": "Samsung Galaxy Note 20 Ultra 5G",
    "image": "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/300x/9df78eab33525d08d6e5fb8d27136e95/y/e/yellow_final_2.jpg",
    "specifications": {
      "screen": 6.9,
      "ram": 12,
      "rom": 256
    },
    "newPrice": 20490000,
    "oldPrice": 32990000
  },

  {
    "productName": "Samsung Galaxy Note 20 Ultra 5G",
    "image": "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/300x/9df78eab33525d08d6e5fb8d27136e95/y/e/yellow_final_2.jpg",
    "specifications": {
      "screen": 6.9,
      "ram": 12,
      "rom": 256
    },
    "newPrice": 20490000,
    "oldPrice": 32990000
  },

  {
    "productName": "Samsung Galaxy Note 20 Ultra 5G",
    "image": "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/300x/9df78eab33525d08d6e5fb8d27136e95/y/e/yellow_final_2.jpg",
    "specifications": {
      "screen": 6.9,
      "ram": 12,
      "rom": 256
    },
    "newPrice": 20490000,
    "oldPrice": 32990000
  },

  {
    "productName": "Samsung Galaxy Note 20 Ultra 5G",
    "image": "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/300x/9df78eab33525d08d6e5fb8d27136e95/y/e/yellow_final_2.jpg",
    "specifications": {
      "screen": 6.9,
      "ram": 12,
      "rom": 256
    },
    "newPrice": 20490000,
    "oldPrice": 32990000
  },

  {
    "productName": "Samsung Galaxy Note 20 Ultra 5G",
    "image": "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/300x/9df78eab33525d08d6e5fb8d27136e95/y/e/yellow_final_2.jpg",
    "specifications": {
      "screen": 6.9,
      "ram": 12,
      "rom": 256
    },
    "newPrice": 20490000,
    "oldPrice": 32990000
  },

  {
    "productName": "Samsung Galaxy Note 20 Ultra 5G",
    "image": "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/300x/9df78eab33525d08d6e5fb8d27136e95/y/e/yellow_final_2.jpg",
    "specifications": {
      "screen": 6.9,
      "ram": 12,
      "rom": 256
    },
    "newPrice": 20490000,
    "oldPrice": 32990000
  },

  {
    "productName": "Samsung Galaxy Note 20 Ultra 5G",
    "image": "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/300x/9df78eab33525d08d6e5fb8d27136e95/y/e/yellow_final_2.jpg",
    "specifications": {
      "screen": 6.9,
      "ram": 12,
      "rom": 256
    },
    "newPrice": 20490000,
    "oldPrice": 32990000
  },


]



function ProductItem(props) {


  return (
    <div class="col-md-3 col-lg col-xl my-5">
      <div class="card shadow"
        style={{
          width: '100%',
          border: '0.5px solid #C4C4C4', borderRadius: '5%', cursor: 'pointer',
          '&:hover': { transform: 'scale(1.1)' ,
          }
        }}
        onClick={() => 1}>
        <img src={props.product.image} class="card-img-top " alt="..." style={{width: '90%', borderRadius: '10%'}}/>
        <div class="card-body">
          <h5 class="card-title">{props.product.productName}</h5>
          <div class='row' style={{ paddingRight: '16px', paddingLeft: '4px' }}>
            <div class='col-md col-lg col-xl float-start m-2 rounded text-center' style={{ backgroundColor: '#C4C4C4', width: '100%' }}>
              {props.product.specifications.screen} inches
            </div>
            {/* <div class='col-md m-2 rounded' style={{ backgroundColor: '#C4C4C4' }}>
              {props.product.specifications.ram}GB
            </div> */}
            <div class='col-md col-lg col-xl m-2 rounded text-center' style={{ backgroundColor: '#C4C4C4' }}>
              {props.product.specifications.rom}GB
            </div>
          </div>
          <p class="text-danger h1">{props.product.newPrice}</p>
          <p class="text-muted h3">{props.product.oldPrice}</p>
        </div>
      </div>
    </div>
  )
}




export default function ProductList() {

  const [index, setIndex] = useState(8)

  const [data, setData] = useState(productData)

  const [increase, setIncrease] = useState(false)

  const [disabledButton, setDisabledButton] = useState(false)

   // này là component 
  function Sort() {
    return <button type="button" class="btn btn-success" onClick={() => handleSort()}>Sắp xếp</button>
  }

  
  function handleSort(){
    setData(productData.slice().sort((a,b) => {
      if (!increase) return a.newPrice - b.newPrice  
      else return -(a.newPrice - b.newPrice)
    }))

    setIncrease(!increase)
  }

  function ButtonMore() {
    return (
      <div class='row mb-5 d-flex justify-content-center'>
        <button type="button" class="btn btn-secondary w-25"
          onClick={handleClickMore} disabled={disabledButton}>
            <span> Xem thêm</span>
          </button>
      </div>
    )
  }



  function handleClickMore() {

  setIndex(n => n + 8)

  if (index + 8 >= productData.length) {
    // setIndex(index - 8)
    setDisabledButton(!disabledButton)
  }
  // else setIndex(index + 8)
  // console.log('Index : ' + index + ' and Len :' + productData.length)
    // console.log(nameBtnMore)
  }


  function RenderProduct() {
    // ReactDOM.render(<ProductItem product={productData[0]} />,listProduct)
    return <Fragment>{data.slice(0, index ).map((product) => {
      return (
        <ProductItem product={product} />
      )
    })} 
    <ButtonMore />
    </Fragment>
  }


  return (
    <div class='container-fluid'>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      <div class='row' style={{ marginLeft: '6rem', marginTop: '5rem' }}>
        <div class='col-md-6'>
          <Sort />
        </div>
      </div>
      <div class='row mx-5' id='product-list'>
        <RenderProduct />
        {/* <ButtonMore /> */}
      </div>
    </div>
  );
}



