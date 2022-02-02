window.onload = function() {
    let navigationMenu = document.createElement('nav');

    navigationMenu.innerHTML = `
        <style>
        .menu{
            list-style-type: none;
        }
        
        nav{
            /* background: red; */
            /* width: 100%; */
            padding: 5px 20px;
            box-shadow: 0 0 8px rgb(165, 164, 164);
            /* position: fixed; */
        }
        
        .menu li a:hover{
            text-decoration: underline;
        }
        
        .menu li{
            font-size: 16px;
            padding: 15px 5px;
        }
        
        .menu li a{
            display: block;
        }
        
        .logo a{
            font-size: 24px;
        }
        
        /* Mobile Menu */
        
        .menu{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
        }
        
        .toggle{
            order: 1;
        }
        .item{
            order: 2;
            width: 100%;
            text-align: center;
            display: none;
        }
        
        .item.active{
            display:block;
        }
        
        
        .toggle{
            cursor: pointer;
        }
        
        .bars{
            background: rgb(131, 130, 130);
            display: inline-block;
            height: 2px;
            position: relative;
            width: 18px;
        }
        
        .bars::before, .bars::after{
            background: rgb(131, 130, 130);
            content: "";
            display: inline-block;
            height: 2px;
            position: absolute;
            width: 18px;
        }
        
        .bars::before{
            top: 10px; /*edited line was -5px*/
        }
        
        .bars::after{
            top: 5px;
        }
        
        /* Tablet Menu */
        
        @media all and (min-width: 468px){
            .menu{
                justify-content: center;
            }
        
            .logo{
                flex: 1;
            }        
            .toggle{
                order: 2;
            }
        }
        
        /*Laptop Menu*/
        
        @media all and (min-width: 768px){
            .item{
                display: block;
                width: auto;
            }
        
            .toggle{
                display: none;
            }
        
            .logo{
                order: 0;
                width: auto;
            }
        
            .item{
                order: 1;
            }
        
            .menu li{
                padding: 15px 10px;
            }
        }
        
        </style>

        
        <ul class="menu">
            <li class="logo"><a href="./index.html">CEL BITS</a></li>
            <li class="item"><a href="./index.html">Home</a></li>
            <li class="item"><a href="./rome.html">About</a></li>
            <li class="item"><a href="./rome.html">Projects</a></li>
            <li class="item"><a href="./rome.html">Resources</a></li>
            <li class="item"><a href="./rome.html">Contact Us</a></li>
            <li class="toggle"><span class="bars"></span></li>
        </ul>
    `;
    document.body.prepend(navigationMenu);
}

