---
title: Human Machine Integration Lab
description: Robotic orthoses, prostheses, and wearable robots for enhanced mobility
carousel-images:
  - file: "assets/images/sparky ankle.jpg"
    caption: SPARKy - Spring Ankle with Regenerative Kinetics
  - file: "assets/images/robotics_lab-3.jpg"
    caption: SPARKy
  - file: "assets/images/robotics_lab-10.jpg"
    caption: ASU Jetpack
  - file: "assets/images/jetpack2.jpg"
    caption: ASU Jetpack
  - file: "assets/images/spiderman.jpg"
    caption: ASU Spiderman Suit
  - file: "assets/images/robotics_lab-5.jpg"
    caption: ASU Cooler Suit
---

<style type="text/css">
  .carousel-caption {bottom:30px;}
</style>

## Research Thrusts

<div class="row" >
  <div class="col-md-6">
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">Compliant Actuators</h3>
      </div>
      <div class="panel-body">
        1. Focused on spring based actuators using Equilibrium Controlled Stiffness and Structure Controlled Stiffness
      </div>
    </div>
  </div>
  <div class="col-md-6">
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">Prosthetics and Orthotics</h3>
      </div>
      <div class="panel-body">
        1. Designed powered prosthetic ankles and orthoses <br/>
        2. Co-investigator on projects to assist Stroke Survivors: RUPERT and Foot Mentor <br/>
      </div>
    </div>
  </div>
  <div class="col-md-6">
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">Exoskeletons</h3>
      </div>
      <div class="panel-body">
        1. We designed hip exoskeletons, HeSA, AirLegs, and PogoSuit <br/>
        2. We use a Phase Oscillator Controller. <br/>
        3. Member of the ASTM F48 Committee
      </div>
    </div>
  </div>
    <div class="col-md-6">
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">Wearable Robotics</h3>
      </div>
      <div class="panel-body">
        1. Wearable Robotics Association <br/>
        2. Designed a jetpack to enhance running
      </div>
    </div>
  </div>
  </div>
  
------

## News

# Can your exoskeleton make these moves? [movie](Hesa Moves compress.mp4)

* <a href="http://www.wearablerobotics.com/wearracon-19/" title="WearRAcon 2019"> WearRAcon 2019  

* There is a [call for papers](CFP.pdf)

* ASU Mechanical Engineering Professor Thomas Sugar was featured in the Tech Briefs Podcast, “Here’s an Idea: Engineering Real-Life Superpowers.” <a href="https://www.techbriefs.com/component/content/article/tb/webcasts/podcasts/32382"> Podcast


* Please check out the IEEE TC on <a href="http://www.ieee-ras.org/wearable-robotics" title="WearRAcon 2019"> Wearable Robotics

<p>Learn more about robotics faculty and research at <a href="http://robotics.asu.edu/">http://robotics.asu.edu/</a></p>

<p style="text-align: center;"><a href='http://robotics.asu.edu/' class='btn btn-lg btn-primary' target="_blank">Visit ASU Robotics</a></p>

<p>Learn more about MS in Robotics and Autonomous Systems at <a href="http://ras.engineering.asu.edu/">http://ras.engineering.asu.edu/</a></p>

<p style="text-align: center;"><a href='http://ras.engineering.asu.edu/' class='btn btn-lg btn-primary' target="_blank">Visit MS in Robotics and Autonomous Systems</a></p>


* White Paper on [Hip Exoskeletons](White Paper WRA final.pdf) 

* <a href="https://exoskeletonreport.com/2018/03/wearracon18-day-one-report/" title="WearRAcon 2018">
WearRAcon 2018

* <a href="https://exoskeletonreport.com/2017/04/wearracon17-day-one-report/" title="WearRAcon 2017">
WearRAcon 2017

* <a href="https://exoskeletonreport.com/2016/02/wearracon16_day_1_report/" title="WearRAcon 2016">
WearRAcon 2016
 
 * <a href="https://www.amazon.com/Wearable-Exoskeleton-Systems-applications-Robotics/dp/1785613022"> Wearable Exoskeleton Systems: Design, control and applications <br/>


<!-- ![Tom doing things](assets/images/robotics_lab-5.jpg)  -->

<div class="row">
  <div class="col-sm-2"></div>
  <div class="col-sm-8">
    <div id="carousel-example-generic" class="carousel slide"  data-ride="carousel">
      <!-- Indicators -->
      <ol class="carousel-indicators">
      {% for item in page.carousel-images %}
      {% capture ii %}{{ forloop.index0 }}{% endcapture %}
        <li data-target="#carousel-example-generic" data-slide-to="{{ii}}"{% if ii == '0' %} class="active"{% endif %}></li>
      {%endfor%}
      </ol>

      <!-- Wrapper for slides -->
      <div class="carousel-inner" role="listbox">
        {% for item in page.carousel-images %}
          {% capture ii %}{{ forloop.index0 }}{% endcapture %}
          <div class="item{% if ii == '0' %} active{% endif %}">
            <img src="{{site.base_path}}/{{item.file}}" alt="...">
            <div class="carousel-caption">
              {{item.caption}}
            </div>
          </div>
        {%endfor%}
      </div>
      <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</div>
