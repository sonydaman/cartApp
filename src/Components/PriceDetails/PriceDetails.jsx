import React from 'react'
import PropTypes from 'prop-types'
import {  List,Icon } from 'semantic-ui-react'
import "../../scss/Component/PriceDetails.scss";
const PriceDetails = ({total}) => {
    const { Items,Price,OfferedPrice } = total;
    return (
        <div className="price-component">
            <List relaxed>
                <List.Item>
                    <List.Content>
                        <div className="price-heading">
                            PRICE DETAILS
                        </div>
                        <div className="price-details">
                            <label className="price-details-left">Price ({Items} {Items > 1 ? "item's" : 'item'})</label>:
                            <label className="price-details-right">
                                <Icon size='small' name="rupee sign" />{Price}
                            </label>
                        </div>
                        <div className="price-details">
                            <label className="price-details-left">Discount</label>:
                            <label className="price-details-right">
                                <Icon size='small' name="rupee sign" />{Price-OfferedPrice}
                            </label>
                        </div>
                        <div className="price-total">
                            <label className="price-total-left">Total Payable</label>
                            <label className="price-total-right">
                                <Icon size='small' name="rupee sign" />{OfferedPrice}
                            </label>
                        </div>
                    </List.Content>
                </List.Item>
            </List>
        </div>
    )
}

PriceDetails.propTypes = {
    total : PropTypes.object.isRequired
}

export default PriceDetails
