<?php
/**
 * Kunena Component
 * @package Kunena.Template.Blue_Eagle
 *
 * @copyright (C) 2008 - 2016 Kunena Team. All rights reserved.
 * @license http://www.gnu.org/copyleft/gpl.html GNU/GPL
 * @link https://www.kunena.org
 **/
defined ( '_JEXEC' ) or die ();
?>
<div id="Kunena" class="layout container-fluid">
<?php
if ($this->ktemplate->params->get('displayMenu', 1)) {
	$this->displayMenu ();
}
$this->displayLoginBox ();
$this->displayBreadcrumb ();

// Display current view/layout
$this->displayLayout();

$this->displayBreadcrumb ();
$this->displayFooter ();
	echo '<div class="krss-block">';
	echo '<a href="#" class="back-to-top">Back to Top</a>';
	echo '</div>';
?>
</div>

<script>
    document.addEventListener("DOMContentLoaded", function() {
        const backToTopButton = document.querySelector('.back-to-top');
        backToTopButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
</script>