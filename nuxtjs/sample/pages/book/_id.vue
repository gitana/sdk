<template>
    <div class="book-detail page">
        <div class="container">
            <div class="primary-block clearfix">
                <div class="row">
                    <div class="col-sm-4">
                        <div class="book-cover book detail-book-cover">
                            <img :src="book.imageUrl" class="img-responsive" :alt="book.title">
                            <div class="fade"></div>
                        </div>
                    </div>

                    <div class="col-sm-8">
                        <div class="book-detail-header">
                            <h2 class="book-title">{{book.title}}</h2>
                            <p class="book-author">By <span class="book-author-name">{{book.author.title}}</span></p>
                            <div class="star-rating">
                            </div>
                        </div>

                        <div class="book-detail-body">

                            <div class="detail-cart-button row clearfix">
                                <div class="pull-right col-md-6 col-sm-7 col-xs-12">
                                    <div class="row product-actions">

                                    </div>
                                </div>
                            </div>

                            <div class="clearfix"></div>

                            <div class="product-description">
                                <h3>Quick Overview</h3>
                                <p>{{book.description}}</p>


                                <template v-if="book.tags">
                                <h3>Tags</h3>
                                    <template v-for="tag in book.tags">
                                    <h4 style="display:inline-block" v-bind:key="tag">
                                        <span class="label label-default">
                                            <a style="color:white">{{tag}}</a>
                                        </span>
                                    </h4>
                                    </template>
                                </template>


                            </div>

                        </div>
                    </div>
                </div>

                <div class="tab-holder clearfix">
                    <div class="book-additional-details">
                        <!-- Nav tabs -->
                        <ul class="nav nav-tabs book-detail-tab">
                            <li class="active" role="presentation"><a href="#more" data-toggle="tab">More About This Book</a></li>
                            <li role="presentation"><a href="#download" data-toggle="tab">Download</a></li>
                        </ul>

                        <!-- Tab panes -->
                        <div class="tab-content">
                            <div class="tab-pane active" id="more" role="tabpanel">
                                <p>{{book.summary}}</p>
                            </div>

                            <div class="tab-pane" id="download" role="tabpanel">
                                <h3>Download</h3>
                                <p>Download this book - <a :href="book.pdfURL" target="_blank">PDF</a></p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- recommendations -->
        <BookList v-if="loaded" title="Recommendations" description="If you enjoy this book, we also recommend..." v-bind:books="book.recommendations" />

    </div>
</template>

<script>
import BookList from "../../components/BookList";

export default {
    components: {
        BookList
    },

    data() {
        return {
            book: {},
            loaded: false
        }
    },

    asyncData(context) {
        const bookId = context.params.id;
        return context.$getCloudCMS().then(function({ branch }) {
            return branch.readNode(bookId).then(function() {
                var book = this;
                book.imageUrl = context.app.$baseCDNURL + "/static/" + book._doc + "-image.jpg?node=" + book._doc;
                book.pdfURL = context.app.$baseCDNURL + "/static/" + book._doc + "-pdf.pdf?node=" + book._doc + "&attachment=book_pdf";
                book.recommendations.forEach(function(rec) {
                    rec._doc = rec.id;
                    rec.imageUrl = context.app.$baseCDNURL + "/static/" + rec.id + "-image.jpg?node=" + rec.id;
                });

                return {
                    book: book,
                    loaded: true
                };
            });
        });
    }

}
</script>
