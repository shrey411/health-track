import styled from 'styled-components'
import Colors from '../../assets/Colors'

export const Wrapper = styled.section`

.container-fluid.main-header{
    padding: 0px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
  }
.container-fluid .header-box{
    width: 92%;
}
.header-box .nav-box1{
    display: flex;
    gap:20px;
    align-items: center;
}                 
.navbar-toggler {
    border-color: ${Colors.BLACK}; // Optional customization for the toggle butto
  }

  .navbar-brand {
    display: flex;
    align-items: center;
  }

  .navbar-collapse {
    justify-content: space-between;
    align-items: center;
  }

  .navbar-nav {
    display: flex;
    // flex-direction: row;
  }

.navbar-nav li{
    padding: 0px 8px;
}
.nav-link {
    color: ${Colors.BLACK};
    font-family: "Outfit", sans-serif;
}

.Profile-dropdown #fade-button{
    color: ${Colors.WHITE} ;
    background-color: ${Colors.BACKGROUND_COLOR1};
    font-family: "Outfit", sans-serif;

}

@media (max-width:1050px) {
  .nav-link {
    font-size: 15px;
  }
}

@media (max-width:1024px) {
  .navbar-brand img {
    width: 90%;
  }
  .navbar-nav li{
    padding: 0px 3px;
}
}

@media (max-width: 992px) {
    .container-fluid .header-box .navbar-header{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .nav-item {
      padding: 10px 0;
    }
      .navbar-toggler {
        display: block; 
        height: 40px;
      }

  }
  

  


`