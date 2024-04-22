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


`