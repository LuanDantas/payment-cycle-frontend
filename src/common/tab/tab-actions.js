// Ação para selecionar Abas
export function selectTab(tabId) {
    console.log(tabId);

    return {
        type: 'TAB_SELECTED',
        payload: tabId
    }
}