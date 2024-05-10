import styled from "styled-components";
import Colors from "../../assets/Colors";

export const Wrapper = styled.section`

.breadcrumb-section{
   display: flex;
   align-items: center;
   justify-content: center;
   position: absolute;
   width: 100%;
   z-index:1;
}
.breadcrumb-nav{
    width: 90%;
}
.breadcrumb {
    display: flex;
    list-style: none;
    padding: 8px 16px;
    background-color: unset;
    
  }
  
  .breadcrumb-item {
    margin-right: 7px;
    font-size: 18px;
  }

  .breadcrumb-item+.breadcrumb-item::before {
    float: left;
    padding-right: .7rem;
    color: ${Colors.FONT_COLOR1};
    content: ">";
  }
  .breadcrumb-item a {
    text-decoration: none;
    color: ${Colors.BACKGROUND_COLOR1}; 
  }
  
  .breadcrumb-item a:hover {
    text-decoration: underline;
  }
  
  .breadcrumb-item.active {
    color: ${Colors.FONT_COLOR1}; 
  }
  
  @media (max-width: 1024px) {

    .breadcrumb-item {
      font-size: 17px;
    }
  }
`