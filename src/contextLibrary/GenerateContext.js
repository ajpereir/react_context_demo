import GenericContext from './GenericContext';

// Actions
import getAction from '../context/actions';

export default function generateContext(...data) {
    return class FullContext extends GenericContext {

        constructor(props) {
            let context = Object.assign(...data);
            console.log(context);

            context.execute = (actionType, ...param) => {
                let action = getAction(actionType);
                this.executeAction(action, param);
            };

            super(props);
            this.state = context;
        }
    }
}