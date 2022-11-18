$(document).ready(function () {
    $('#content').load('components/aboutMe.php');

    $('.menu').click(function (e) {
        e.preventDefault();

        var menu = $(this).attr('id');

        if (menu == "menuTentang") {
            $('.menu').removeClass('text-green-500 border-b-4 border-green-500');
            $(this).addClass('text-green-500 border-b-4 border-green-500');
            $('#content').load('components/aboutMe.php');
        } else if (menu == "menuProject") {
            $('.menu').removeClass('text-green-500 border-b-4 border-green-500');
            $(this).addClass('text-green-500 border-b-4 border-green-500');
            $('#content').load('components/project.php');
        } else if (menu == "menuTentang-mobile") {
            $('.block').removeClass('text-white bg-green-500 font-semibold');
            $(this).addClass('text-white bg-green-500 font-semibold');
            $('#content').load('components/aboutMe.php');
        } else if (menu == "menuProject-mobile") {
            $('.block').removeClass('text-white bg-green-500 font-semibold');
            $(this).addClass('text-white bg-green-500 font-semibold');
            $('#content').load('components/project.php');
        }
    });
});