import AppHeader from "../componants_service/reshma/AppHeader";
import CardPaymentForm from "../componants_service/reshma/CardPaymentForm";
export default function S14_AddNewCard() {
  return (
    <>
      <AppHeader
        title="new card"
        showBack={true}
        showSearch={true}
        showPhone={false}
        showFilter={true}
        showMenu={false}
        theme="black"
      />

      <CardPaymentForm />

    </>
  );
}