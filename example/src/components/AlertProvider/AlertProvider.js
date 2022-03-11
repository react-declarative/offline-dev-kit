import { observer } from 'mobx-react-lite';

import { Snackbar } from "@mui/material";
import { Fragment } from 'react';

import ioc from 'ioc';

const AUTO_HIDE_DURATION = 5000;

export const AlertProvider = ({
    children = null,
}) => {
    const { current } = ioc.alertService;
    return htm`
        <${Fragment}>
            ${!!current && htm`
                <${Snackbar}
                    open
                    key=${current.key}
                    anchorOrigin=${{ vertical: 'bottom', horizontal: 'center' }}
                    autoHideDuration=${AUTO_HIDE_DURATION}
                    onClose=${ioc.alertService.hideCurrent}
                    message=${current.message}
                />
            `}
            ${children}
        <//>
    `;
};

export default observer(AlertProvider);
