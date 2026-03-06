#include <stdio.h>
int main() {
    int notaa;
    int notab;
    int notac;
    float media;

    printf("Digite a primeira nota:\n");
    scanf("%i", &notaa);
    printf("Digite a segunda nota\n");
    scanf("%i", &notab);
    printf("Digite a terceira nota\n");
    scanf("%i", &notac);

    media = (notaa + notab + notac)/3;

    printf("A media das notas do aluno e: $f", media);

    return 0;
}