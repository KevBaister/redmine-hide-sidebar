var hideSidebar = function(){

    var mainDiv = $('div#main:not([class="nosidebar"])'),
        sidebar = $('div#sidebar'),
        sidebarVisible = false,
        showSidebarToggle = null;

    run = function(){

        if(mainDiv.length === 1){
            mainDiv.addClass('nosidebar');
            addToggleSidebarVisibilityItems();
        }

    };

    addToggleSidebarVisibilityItems = function(){
        addShowSidebarItem();
        addHideSidebarItem();
    };

    addShowSidebarItem = function(){
        showSidebarToggle = $('<div id="showSidebar"><span>&laquo;</span></div>').hide();
        
        showSidebarToggle.click(showSidebar);

        $(window).resize(positionShowSidebarToggle).scroll(positionShowSidebarToggle);
        $('body').append(showSidebarToggle);

        positionShowSidebarToggle();
        showSidebarToggle.show();
    };

    positionShowSidebarToggle = function(){
        if(!sidebarVisible){
            var topPosition = ($(window).height() / 2) - (showSidebarToggle.outerHeight() / 2) + $(window).scrollTop(),
                leftPosition = $(window).width() - showSidebarToggle.outerWidth(true);

            showSidebarToggle.css({
                'top': topPosition + 'px',
                'left': leftPosition + 'px'
            });
        }
    };

    showSidebar = function(){
        showSidebarToggle.hide();
        sidebarVisible = true;
        mainDiv.removeClass('nosidebar');
    };

    addHideSidebarItem = function(){
        var hideSidebarItem = $('<p id="hideSidebar">Hide Sidebar &raquo;</p>');
        hideSidebarItem.click(hideSidebarHandler);
        sidebar.prepend(hideSidebarItem);
    };

    hideSidebarHandler = function(){
        mainDiv.addClass('nosidebar');
        sidebarVisible = false;
        positionShowSidebarToggle();
        showSidebarToggle.show();
    };

    return {
        run: run
    };
}();

hideSidebar.run();