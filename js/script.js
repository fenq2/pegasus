var sandwich = function () {
    var $hideElement = $('.sandwich__content');
    $('.sandwich__open-btn').on('click', function(){
        $hideElement.addClass('sandwich__content-opend');
    });
    $('.sandwich__close-btn').on('click', function(){
        $hideElement.removeClass('sandwich__content-opend');
    });
};
sandwich();
