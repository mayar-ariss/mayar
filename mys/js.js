
$(document).ready(function () {
    console.log('scrolled')
    $(window).scrollTop(0);
    $(document).scrollTop(0);
});

$('#videointro').on('ended', function () {
    console.log('done')
    $('.Intropage').addClass("hideopening");
    $('.fillBackground').addClass("hideopening");
    $('.openingvideo').addClass("hideopening");



});



d3.xml("images/worldmap_guides-01.svg").then(function (xml) {

    document.getElementById('worldmap').appendChild(xml.documentElement);

    d3.select('#Amsterdam_L')
    .attr('class', 'ams')

    d3.select( '#Amsterdam1_' )
    .attr( 'class', 'ams')
    
    d3.select( '#Amsterdam2_' )
    .attr( 'class', 'ams')

        d3.selectAll('.ams')
            .on('mouseover', function () {
            console.log('mouseover')
            d3.selectAll('.ams').style('display', 'block')
        })
            .on('mouseout', function () {
                console.log('mousegone')
            d3.selectAll('.ams').style('display', 'none')
        })

    d3.select('#Amsterdam1_')
    .on('click',function(){
        window.open(href = 'http://senseable.mit.edu/papers/pdf/20170707_SCL_Guide_Amsterdam.pdf', '_blank');    

    })
    d3.select('#Amsterdam2_')
    .on('click',function(){
        window.open(href = 'http://senseable.mit.edu/papers/pdf/20170525_SCL_Guide_Amsterdam-Roboat.pdf', '_blank');    

    })



    ///Copenhagen

    d3.select('#Copenhagen_L')
        .attr('class', 'cop')

    d3.select('#Copenhagen1_')
        .attr('class', 'cop')

    d3.select('#Copenhagen2_')
        .attr('class', 'cop')

    d3.selectAll('.cop')
        .on('mouseover', function () {
            console.log('mouseover')
            d3.selectAll('.cop').style('display', 'block')
        })
        .on('mouseout', function () {
            console.log('mousegone')
            d3.selectAll('.cop').style('display', 'none')
        })

    d3.select('#Copenhagen1_')
        .on('click', function () {
            window.open(href = 'http://senseable.mit.edu/papers/pdf/20110412_Woods_etal_SenseableCopenhagen_SAP.pdf', '_blank');

        })
    d3.select('#Copenhagen2_')
        .on('click', function () {
            window.open(href = 'http://senseable.mit.edu/papers/pdf/20110412_Shaw_etal_SenseableCopenhagen2_SAP.pdf', '_blank');

        })



    ///Moscow

    d3.select('#Moscow_L')
        .attr('class', 'mos')

    d3.select('#Moscow1_')
        .attr('class', 'mos')

    d3.select('#Moscow2_')
        .attr('class', 'mos')

    d3.selectAll('.mos')
        .on('mouseover', function () {
            console.log('mouseover')
            d3.selectAll('.mos').style('display', 'block')
        })
        .on('mouseout', function () {
            console.log('mousegone')
            d3.selectAll('.mos').style('display', 'none')
        })

    d3.select('#Moscow1_')
        .on('click', function () {
            window.open(href = 'http://senseable.mit.edu/papers/pdf/20120623_Siprikova_etal_SenseableCity_SAP.pdf', '_blank');

        })
    d3.select('#Moscow2_')
        .on('click', function () {
            window.open(href = 'http://senseable.mit.edu/papers/pdf/20120623_Muessig_etal_SenseableCity_SAP.pdf', '_blank');

        })



    ///Paris

    d3.select('#Paris_L')
        .attr('class', 'par')

    d3.select('#Paris1_')
        .attr('class', 'par')

    d3.select('#Paris2_')
        .attr('class', 'par')

    d3.selectAll('.par')
        .on('mouseover', function () {
            console.log('mouseover')
            d3.selectAll('.par').style('display', 'block')
        })
        .on('mouseout', function () {
            console.log('mousegone')
            d3.selectAll('.par').style('display', 'none')
        })

    d3.select('#Paris1_')
        .on('click', function () {
            window.open(href = 'http://senseable.mit.edu/papers/pdf/20110412_Mohsenin_etal_SenseableParis_SAP.pdf', '_blank');

        })
    d3.select('#Paris2_')
        .on('click', function () {
            window.open(href = 'http://senseable.mit.edu/papers/pdf/20180910_SENSEABLE-GUIDE-PARIS-2.pdf', '_blank');

        })


    ///rio

    d3.select('#Rio_L')
        .attr('class', 'Rio')

    d3.select('#Rio1_')
        .attr('class', 'Rio')

    d3.select('#Rio2_')
        .attr('class', 'Rio')

    d3.selectAll('.Rio')
        .on('mouseover', function () {
            console.log('mouseover')
            d3.selectAll('.Rio').style('display', 'block')
        })
        .on('mouseout', function () {
            console.log('mousegone')
            d3.selectAll('.Rio').style('display', 'none')
        })

    d3.select('#Rio1_')
        .on('click', function () {
            window.open(href = 'http://senseable.mit.edu/papers/pdf/20110412_Giner_etal_SenseableRio_SAP.pdf', '_blank');

        })
    d3.select('#Rio2_')
        .on('click', function () {
            window.open(href = 'http://senseable.mit.edu/papers/pdf/20120412_Anwar_etal_SenseableRio2_SAP.pdf', '_blank');

        })






 
    d3.select('#Laval')
        .on('click',function(){

            window.open(href = 'http://senseable.mit.edu/papers/pdf/20201218_SCL-Guide_Laval.pdf', '_blank');
        })


        d3.select('#MIT')
        .on('click',function(){

            window.open(href = 'http://senseable.mit.edu', '_blank');

        })

        d3.select('#Rio')
        .on('click',function(){
            window.open(href = 'http://senseable.mit.edu/papers/pdf/20120412_Anwar_etal_SenseableRio2_SAP.pdf', '_blank');

        })


    
    d3.select('#Curitiba')
        .on('click',function(){
            window.open(href = 'http://senseable.mit.edu/papers/pdf/20200811_SENSEABLE_GUIDE_TO_CURITIBA.pdf', '_blank');    

        })


        d3.select('#Amsterdam')
        .on('click',function(){
            window.open(href = 'http://senseable.mit.edu/papers/pdf/20170707_SCL_Guide_Amsterdam.pdf', '_blank');    

        })

        d3.select('#Amsterdam2')
        .on('click',function(){
            window.open(href = 'http://senseable.mit.edu/papers/pdf/20170525_SCL_Guide_Amsterdam-Roboat.pdf', '_blank');    

        })

  

        d3.select('#Copehagen')
        .on('click',function(){
            window.open(href = 'http://senseable.mit.edu/papers/pdf/20110412_Woods_etal_SenseableCopenhagen_SAP.pdf', '_blank');  

        })

        
        d3.select('#Copehagen2')
        .on('click',function(){
            window.open(href = 'http://senseable.mit.edu/papers/pdf/20110412_Shaw_etal_SenseableCopenhagen2_SAP.pdf', '_blank');

        })

     

        d3.select('#Moscow')
        .on('click',function(){
            window.open(href = 'http://senseable.mit.edu/papers/pdf/20120623_Siprikova_etal_SenseableCity_SAP.pdf', '_blank');
          

        })

        d3.select('#Moscow2')
        .on('click',function(){
            window.open(href = 'http://senseable.mit.edu/papers/pdf/20120623_Muessig_etal_SenseableCity_SAP.pdf', '_blank');

        })



        d3.select('#BenGuerir')
        .on('click',function(){
            window.open(href = 'http://senseable.mit.edu/papers/pdf/20170525_SCL_Guide_BenGuerir.pdf', '_blank');

        })

        d3.select('#Munich')
        .on('click',function(){
            window.open(href = 'http://senseable.mit.edu/papers/pdf/20190917_SenseableGuide-Munich.pdf', '_blank');

        })


    d3.select('#Zhengzhou')
        .on('click',function(){
            window.open(href = 'http://senseable.mit.edu/papers/pdf/20190215_SenseableGuide_Zhengzhou.pdf', '_blank');

        })

d3.select('#Paris')
.on('click',function(){
    window.open(href = 'http://senseable.mit.edu/papers/pdf/20110412_Mohsenin_etal_SenseableParis_SAP.pdf', '_blank');

})

d3.select('#Paris2')
.on('click',function(){
    window.open(href = 'http://senseable.mit.edu/papers/pdf/20180910_SENSEABLE-GUIDE-PARIS-2.pdf', '_blank');

})



d3.select('#Shenzhen')
.on('click',function(){
    window.open(href = 'http://senseable.mit.edu/papers/pdf/20180910_SENSEABLE-GUIDE-SHENZHEN.pdf', '_blank');

})

d3.select('#Quito')
.on('click',function(){
    window.open(href = 'http://senseable.mit.edu/papers/pdf/20170525_SCL_Guide_Quito.pdf', '_blank');
    

})

d3.select('#Pune')
.on('click',function(){
    window.open(href = 'http://senseable.mit.edu/papers/pdf/20141215_SenseableGuide_3CITIES.pdf', '_blank');

})

d3.select('#Woods')
.on('click',function(){
    window.open(href = 'http://senseable.mit.edu/papers/pdf/20141215_SenseableGuide_3CITIES.pdf', '_blank');

})

d3.select('#Dallas')
.on('click',function(){
    window.open(href = 'http://senseable.mit.edu/papers/pdf/20141215_SenseableGuide_3CITIES.pdf', '_blank');

})


d3.select('#Cape_town')
.on('click',function(){
    window.open(href = 'http://senseable.mit.edu/papers/pdf/20131231_Howe_etal_SenseableCity_SAP.pdf', '_blank');

})

d3.select('#Medellin')
.on('click',function(){
    window.open(href = 'http://senseable.mit.edu/papers/pdf/20131231_Rouault_etal_SenseableCity_SAP.pdf', '_blank');

})



d3.select('#Madrid')
.on('click',function(){
    window.open(href = 'http://senseable.mit.edu/papers/pdf/20120623_Ferrentino_etal_SenseableCity_SAP.pdf', '_blank');

})

d3.select('#Bolzano')
.on('click',function(){
    window.open(href = 'http://senseable.mit.edu/papers/pdf/20110412_Kardasis_etal_SenseableBolzano_SAP.pdf', '_blank');

})

d3.select('#Thessaloniki')
.on('click',function(){
    window.open(href = 'http://senseable.mit.edu/papers/pdf/20110412_Albericci_etal_SenseableThessaloniki_SAP.pdf', '_blank');

})

d3.select('#Melbourne')
.on('click',function(){
    window.open(href = 'http://senseable.mit.edu/papers/pdf/20180910_SENSEABLE-GUIDE-MELBOURNE.pdf', '_blank');

})




    ///


    d3.select('#Laval_L')
        .on('click', function () {

            window.open(href = 'http://senseable.mit.edu/papers/pdf/20201218_SCL-Guide_Laval.pdf', '_blank');
        })


    d3.select('#MIT_L')
        .on('click', function () {

            window.open(href = 'http://senseable.mit.edu', '_blank');

        })

    d3.select('#Rio_L')
        .on('click', function () {
            window.open(href = 'http://senseable.mit.edu/papers/pdf/20120412_Anwar_etal_SenseableRio2_SAP.pdf', '_blank');

        })



    d3.select('#Curibita_L')
        .on('click', function () {
            window.open(href = 'http://senseable.mit.edu/papers/pdf/20200811_SENSEABLE_GUIDE_TO_CURITIBA.pdf', '_blank');

        })



    d3.select('#Amsterdam_L')
        .on('click', function () {
            window.open(href = 'http://senseable.mit.edu/papers/pdf/20170707_SCL_Guide_Amsterdam.pdf', '_blank');

        })

    d3.select('#Amsterdam2_L')
        .on('click', function () {
            window.open(href = 'http://senseable.mit.edu/papers/pdf/20170525_SCL_Guide_Amsterdam-Roboat.pdf', '_blank');

        })



    d3.select('#Copehagen_L')
        .on('click', function () {
            window.open(href = 'http://senseable.mit.edu/papers/pdf/20110412_Woods_etal_SenseableCopenhagen_SAP.pdf', '_blank');

        })


    d3.select('#Copehagen2_L')
        .on('click', function () {
            window.open(href = 'http://senseable.mit.edu/papers/pdf/20110412_Shaw_etal_SenseableCopenhagen2_SAP.pdf', '_blank');

        })



    d3.select('#Moscow_L')
        .on('click', function () {
            window.open(href = 'http://senseable.mit.edu/papers/pdf/20120623_Siprikova_etal_SenseableCity_SAP.pdf', '_blank');


        })

    d3.select('#Moscow2_L')
        .on('click', function () {
            window.open(href = 'http://senseable.mit.edu/papers/pdf/20120623_Muessig_etal_SenseableCity_SAP.pdf', '_blank');

        })



    d3.select('#BenGuerir_L')
        .on('click', function () {
            window.open(href = 'http://senseable.mit.edu/papers/pdf/20170525_SCL_Guide_BenGuerir.pdf', '_blank');

        })

    d3.select('#Munich_L')
        .on('click', function () {
            window.open(href = 'http://senseable.mit.edu/papers/pdf/20190917_SenseableGuide-Munich.pdf', '_blank');

        })


    d3.select('#Zhengzhou_L')
        .on('click', function () {
            window.open(href = 'http://senseable.mit.edu/papers/pdf/20190215_SenseableGuide_Zhengzhou.pdf', '_blank');

        })

    d3.select('#Paris_L')
        .on('click', function () {
            window.open(href = 'http://senseable.mit.edu/papers/pdf/20110412_Mohsenin_etal_SenseableParis_SAP.pdf', '_blank');

        })

    d3.select('#Paris2_L')
        .on('click', function () {
            window.open(href = 'http://senseable.mit.edu/papers/pdf/20180910_SENSEABLE-GUIDE-PARIS-2.pdf', '_blank');

        })



    d3.select('#Shenzhen_L')
        .on('click', function () {
            window.open(href = 'http://senseable.mit.edu/papers/pdf/20180910_SENSEABLE-GUIDE-SHENZHEN.pdf', '_blank');

        })

    d3.select('#Quito_L')
        .on('click', function () {
            window.open(href = 'http://senseable.mit.edu/papers/pdf/20170525_SCL_Guide_Quito.pdf', '_blank');


        })

    d3.select('#Pune_L')
        .on('click', function () {
            window.open(href = 'http://senseable.mit.edu/papers/pdf/20141215_SenseableGuide_3CITIES.pdf', '_blank');

        })

    d3.select('#Woods_L')
        .on('click', function () {
            window.open(href = 'http://senseable.mit.edu/papers/pdf/20141215_SenseableGuide_3CITIES.pdf', '_blank');

        })

    d3.select('#Dallas_L')
        .on('click', function () {
            window.open(href = 'http://senseable.mit.edu/papers/pdf/20141215_SenseableGuide_3CITIES.pdf', '_blank');

        })


    d3.select('#CapeTown_L  ')
        .on('click', function () {
            window.open(href = 'http://senseable.mit.edu/papers/pdf/20131231_Howe_etal_SenseableCity_SAP.pdf', '_blank');

        })

    d3.select('#Medellin_L')
        .on('click', function () {
            window.open(href = 'http://senseable.mit.edu/papers/pdf/20131231_Rouault_etal_SenseableCity_SAP.pdf', '_blank');

        })



    d3.select('#Madrid_L')
        .on('click', function () {
            window.open(href = 'http://senseable.mit.edu/papers/pdf/20120623_Ferrentino_etal_SenseableCity_SAP.pdf', '_blank');

        })

    d3.select('#Bolzano_L')
        .on('click', function () {
            window.open(href = 'http://senseable.mit.edu/papers/pdf/20110412_Kardasis_etal_SenseableBolzano_SAP.pdf', '_blank');

        })

    d3.select('#Thessaloniki_L')
        .on('click', function () {
            window.open(href = 'http://senseable.mit.edu/papers/pdf/20110412_Albericci_etal_SenseableThessaloniki_SAP.pdf', '_blank');

        })

    d3.select('#Melbourne_L')
        .on('click', function () {
            window.open(href = 'http://senseable.mit.edu/papers/pdf/20180910_SENSEABLE-GUIDE-MELBOURNE.pdf', '_blank');

        })




    })




