const hbs = `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/5.3.3/cosmo/bootstrap.min.css">
    <title>Hello, world!</title>
    <style>
        .drag-n-drop-placeholder {
            border: 2px dashed black; 
        }
        section[visual-editor]:hover {
            border: 2px dashed black; 
            cursor: grab;
        }
        section[visual-editor] {
            border: 2px solid transparent; 
        }
        
        body { 
            animation: fadeInAnimation ease-in 150ms; 
            animation-iteration-count: 1; 
            animation-fill-mode: forwards; 
        } 
        @keyframes fadeInAnimation { 
            0% { 
                opacity: 0; 
            } 
            100% { 
                opacity: 1; 
            } 
        } 
    </style>
  </head>
  <body>
  
  <div class="sortable">
    {{{content}}}
  </div>
  
<script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@latest/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossorigin="anonymous"></script>
<script src="https://code.jquery.com/ui/1.14.0/jquery-ui.min.js" integrity="sha256-Fb0zP4jE3JHqu+IBB9YktLcSjI1Zc6J2b6gTjB0LpoM=" crossorigin="anonymous"></script>  
  <script>
    const scrollY = localStorage.getItem('scrollY');
    const bodyHeight = localStorage.getItem('bodyHeight');
    if (scrollY) {
        window.scrollTo(0, scrollY);
    }
    
    if (bodyHeight) {
        window.scroll(0, scrollY);
    }
    
    window.addEventListener('scroll', () => {
      localStorage.setItem('scrollY', window.scrollY);
    });
    
  $(function() {
    const sort = $(".sortable").sortable({
        placeholder: "drag-n-drop-placeholder",
        axis: 'y',
        cursor: 'grabbing',
        distance: 10,
        items: '> section[visual-editor]',
        opacity: 0.25,
        scrollSensitivity: 100,
        forcePlaceholderSize: true,
    }).disableSelection();
    
    $('a').click(function(e) {
        e.preventDefault();
    });
    
    sort.on("sortupdate", function( event, ui ) {
      const newOrder = [];
      document.querySelectorAll('section[visual-editor]').forEach(el => {
        newOrder.push(el.getAttribute('visual-editor'));
      });
      window.top.postMessage({
        event: 'sorted',
        newOrder
      }, '*');
    });
  });
  </script>
  
  <script>
  document.querySelectorAll('section[visual-editor]').forEach(el => {
    el.addEventListener('click', () => {
      window.top.postMessage({
        event: 'click',
        blockId: el.getAttribute('visual-editor')
      }, '*');
    })
  });
  </script>
  </body>
</html>
`;

const document = {
  hbs,
  name: 'Bootswatch Cosmo (Bootstrap 4.5)'
}

export default document;
