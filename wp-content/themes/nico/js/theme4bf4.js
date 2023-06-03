"use strict";

wglIsVisibleInit();

jQuery(document).ready(function($) {
    wglStickyInit();
    wglSearchInit();
    wglSidePanelInit();
    wglMobileHeader();
    wglWoocommerceHelper();
    wglWoocommerceLoginIn();
    wglInitTimelineAppear();
    wglAccordionInit();
    wglServicesAccordionInit();
    wglProgressBarsInit();
    wglCarouselSwiper();
    wglFilterSwiper();
    wglTimelineHorizontal();
    wglImageComparison();
    wglCounterInit();
    wglCountdownInit();
    wglImgLayers();
    wglPageTitleParallax();
    wglExtendedParallax();
    wglPortfolioParallax();
    wglMessageAnimInit();
    wglScrollUp();
    wglLinkOverlay();
    wglLinkScroll();
    wglSkrollrInit();
    wglStickySidebar();
    wglVideoboxInit();
    wglParallaxVideo();
    wglShowcaseInit();
    wglCircuitService();
    wglSelectWrap();
    wglScrollAnimation();
    wglWoocommerceMiniCart();
    wglTextBackground();
    wglDynamicStyles();
    wglPieChartInit();
    wglButtonAnimation();
});

jQuery(window).load(function () {
    wglTabsInit();
    wglCursorInit();
    wglImagesGallery();
    wglIsotope();
    wglBlogMasonryInit();
    setTimeout(function(){
        jQuery('#preloader-wrapper').fadeOut();
    },1100);

    wglParticlesCustom();
    wglParticlesImageCustom();
    wglMenuLavalamp();
    jQuery(".wgl-currency-stripe_scrolling").each(function(){
        jQuery(this).simplemarquee({
            speed: 40,
            space: 0,
            handleHover: true,
            handleResize: true
        });
    })
});
