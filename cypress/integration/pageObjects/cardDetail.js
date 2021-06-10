class CardDetail {
    getCloseIcon() {
        return cy.get('[e2e-id=1a52f78a-cb1c-46fb-b426-aacc73f0b7c2]');
    }
    getImagesHeader() {
        return cy.get('.box__header_image_size');
    }
}
class PropertyCardDetail extends CardDetail {
    getName() {
        return cy.get('[e2e-id=b344e8ba-d41e-43a2-8749-d3a93f0505e1]');
    }
    getAddress() {
        return cy.xpath(
            '//*[@id="details-panel"]/div/app-property-details-header/div/div[2]'
        );
    }
    getPhoneNumber() {
        return cy
            .get('[e2e-id=9f4bd4d1-060d-49bc-a29e-a91270eb9821')
            .eq(0)
            .find('.box-10.box__value.app-ellipsis');
    }
    getEmail() {
        return cy
            .get('[e2e-id=9f4bd4d1-060d-49bc-a29e-a91270eb9821')
            .eq(0)
            .find('.box-10.box__value.app-ellipsis');
    }
}
export const propertyCardDetail = new PropertyCardDetail();
