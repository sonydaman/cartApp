import * as types from '../actions/types.js'
import initialState from "../initialState";
const {search : SearchInit} = initialState;

export default function search(search = SearchInit, action = {}) {
    switch (action.type) {
        case types.SET_SEARCH:
            return {...search, 
                [action.key]: action.data,
            }
        case types.SET_FILTERS:
            const filters = search;
            Object.keys(action.data).forEach(item => {
                filters[item] = action.data[item]
            })
            return {...search,  filters}
        case types.SET_SEARCH_QUERY:
            return {...search, 
                query: action.value
            }
        case types.SET_AUTOCOMPLETE:
            return  {  ...search,autocomplete: {
                    product: action.data.filter(item => item.product).map(item => item.product.name),
                    service: action.data.filter(item => item.service).map(item => item.service.title),
                }
            }
        case types.SET_AUTOCOMPLETE_SALON:
            return {...search,  
                autocompleteSalon: action.data.map(item => item.organization_name)
            }
        case types.SET_SEARCH_TYPE:
            return {...search, 
                type: action.value
            }
        default:
            return search;
    }
}