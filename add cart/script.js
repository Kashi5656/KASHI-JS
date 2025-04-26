const product=[
    {
        id:0,
        image:'img/img.jpeg',
        title:'I phon-13',
        price:200,
    },

    {
        id:1,
        image:'img/img-1.jpeg',
        title:'Iphone-14',
        price:500,
    },

    {
        id:2,
        image:'img/img-2.jpeg',
        title:'One PLues Nord',
        price:260,
    },

    {
        id:3,
        image:'img/img-3.webp',
        title:'One plues nord-J',
        price:100,
    }
]

const categories=[...new Set(product.map((item)=>{return item}))];

let i=0;

document.getElementById("root").innerHTML=categories.map((item)=>
{
    var{image,title,price}=item;
    return(
        `<div class='box'>
        <div class='img-box'>
        <img class='images' src=${image}></img>
        </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>add to cart</button>"+
        `</div>
        </div>`
    )
}
).join('');

var cart=[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a,1);
    displaycart();
}

function displaycart(a){
    let j=0,total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartitem').innerHTML="your cart is empty";
        document.getElementById("total").innerHTML="$"+0+".00"

    }else{
        document.getElementById('cartitem').innerHTML=cart.map((items)=>{
            var{image,title,price}=items;
            total=total+price
            document.getElementById("total").innerHTML="$"+total+".00"
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                  <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>` +
              "<i class='fa-solid fa-trash' onclick='delElement(" + (j++) + ")'></i></div>"
            );
        }).join('')
    }
}