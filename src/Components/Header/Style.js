import styled from 'styled-components'
import Colors from '../../assets/Colors'

export const Wrapper = styled.section`

.container-fluid.main-header{
    padding: 0px;
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
    border-color: ${Colors.BLACK}; // Optional customization for the toggle button
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
    flex-direction: row;
  }

.navbar-nav li{
    padding: 0px 15px;
}
.nav-link{
    color: ${Colors.BLACK};
    font-family: "Outfit", sans-serif;
}

.Profile-dropdown #fade-button{
    color: ${Colors.WHITE} ;
    background-color: ${Colors.BACKGROUND_COLOR1};
    font-family: "Outfit", sans-serif;

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