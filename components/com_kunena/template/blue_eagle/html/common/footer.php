<?php
/**
 * Kunena Component
 * @package Kunena.Template.Blue_Eagle
 * @subpackage Common
 *
 * @copyright (C) 2008 - 2016 Kunena Team. All rights reserved.
 * @license http://www.gnu.org/copyleft/gpl.html GNU/GPL
 * @link https://www.kunena.org
 **/
defined ( '_JEXEC' ) or die ();
?>
<!-- Module position: kunena_bottom -->
<?php $this->displayModulePosition( 'kunena_bottom' ); ?>
<?php if (isset($this->rss)) : ?>
    <div class="krss-block"><?php echo $this->rss; ?></div>
<?php endif; ?>
<?php if (($time = $this->getTime()) !== null) : ?>
    <div class="kfooter">
        <span class="kfooter-time"><?php echo JText::sprintf('COM_KUNENA_VIEW_COMMON_FOOTER_TIME', $time) ?></span>
    </div>
<?php endif; ?>
<div class="krss-block">
    <a href="#" class="back-to-top">Back to Top</a>
</div>
<div id="rt-copyright">
    <div class="rt-container" style="text-align: center; padding-top: 35px; margin-bottom: -35px; font-size: larger;">
        <?php echo 'Powered by <a href="https://github.com/ItsDonnyDev" rel="follow" target="_blank">Donny</a>'; ?>
        <div class="clear"></div>
    </div>
</div>
