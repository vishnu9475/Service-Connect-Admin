import AlertMessage from "../componants_service/reshma/AlertMessage";
import AppHeader from "../componants_service/reshma/AppHeader";
const S18_CheckoutSuccess = () => {
  return (
    <>
      <AppHeader
        title="success"
        showBack={true}
        showSearch={false}
        showPhone={false}
        showFilter={false}
        showMenu={false}
        theme="black"
      />
      
        <AlertMessage />
      
    </>
  );
};
export default S18_CheckoutSuccess;
