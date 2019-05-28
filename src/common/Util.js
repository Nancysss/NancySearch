const Util={
    searchAPI(router,searchText){
        if(searchText!=="")
        router.push(`/search/${searchText}`)
    },
    searchAPIS(router,searchText,choose){
        if(searchText!=="")
        router.push(`/search/${searchText}/${choose}`)
    },
    
}

export default Util;

